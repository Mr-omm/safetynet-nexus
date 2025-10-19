-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  employee_id TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  department TEXT,
  designation TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
ON public.profiles FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
ON public.profiles FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile"
ON public.profiles FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Create user roles table
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Function to check user roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Safety observations table
CREATE TABLE public.safety_observations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  location TEXT NOT NULL,
  gps_coordinates TEXT,
  severity TEXT NOT NULL CHECK (severity IN ('Low', 'Medium', 'High')),
  description TEXT NOT NULL,
  photo_url TEXT,
  corrective_action TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'submitted')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.safety_observations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own observations"
ON public.safety_observations FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can create observations"
ON public.safety_observations FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own observations"
ON public.safety_observations FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

-- Training sessions table
CREATE TABLE public.training_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  training_type TEXT NOT NULL,
  trainer_name TEXT NOT NULL,
  contractor_name TEXT,
  duration_start TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_end TIMESTAMP WITH TIME ZONE NOT NULL,
  participants_count INTEGER NOT NULL,
  topic_covered TEXT NOT NULL,
  attendance_photo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.training_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own training sessions"
ON public.training_sessions FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can create training sessions"
ON public.training_sessions FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Near miss incidents table
CREATE TABLE public.near_miss_incidents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  location TEXT NOT NULL,
  gps_coordinates TEXT,
  area_department TEXT NOT NULL,
  incident_description TEXT NOT NULL,
  photo_url TEXT,
  potential_consequence TEXT NOT NULL,
  preventive_action TEXT NOT NULL,
  status TEXT DEFAULT 'submitted' CHECK (status IN ('submitted', 'reviewed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.near_miss_incidents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own near miss incidents"
ON public.near_miss_incidents FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can create near miss incidents"
ON public.near_miss_incidents FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- First aid cases table
CREATE TABLE public.first_aid_cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  employee_name TEXT NOT NULL,
  employee_id TEXT NOT NULL,
  incident_date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT NOT NULL,
  injury_type TEXT NOT NULL,
  treatment_given TEXT NOT NULL,
  first_aider_name TEXT NOT NULL,
  photo_url TEXT,
  remarks TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.first_aid_cases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own first aid cases"
ON public.first_aid_cases FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can create first aid cases"
ON public.first_aid_cases FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Stop work orders table
CREATE TABLE public.stop_work_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  project_location TEXT NOT NULL,
  reason TEXT NOT NULL,
  stop_time TIMESTAMP WITH TIME ZONE NOT NULL,
  resume_time TIMESTAMP WITH TIME ZONE,
  issued_by TEXT NOT NULL,
  received_by TEXT NOT NULL,
  unsafe_description TEXT NOT NULL,
  photo_url TEXT,
  corrective_action_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.stop_work_orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own stop work orders"
ON public.stop_work_orders FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can create stop work orders"
ON public.stop_work_orders FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- SIC meetings table
CREATE TABLE public.sic_meetings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  meeting_date TIMESTAMP WITH TIME ZONE NOT NULL,
  project_site TEXT NOT NULL,
  participants TEXT[] NOT NULL,
  safety_issues TEXT NOT NULL,
  action_points TEXT NOT NULL,
  next_meeting_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.sic_meetings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own SIC meetings"
ON public.sic_meetings FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can create SIC meetings"
ON public.sic_meetings FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Create storage bucket for safety photos
INSERT INTO storage.buckets (id, name, public) 
VALUES ('safety-photos', 'safety-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Users can upload their own photos"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'safety-photos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Anyone can view photos"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'safety-photos');

-- Trigger to auto-create profile
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, employee_id, full_name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'employee_id', 'EMP' || substr(NEW.id::text, 1, 8)),
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    NEW.email
  );
  
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Update timestamp function
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_safety_observations_updated_at
  BEFORE UPDATE ON public.safety_observations
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();