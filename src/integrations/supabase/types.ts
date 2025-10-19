export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      first_aid_cases: {
        Row: {
          created_at: string
          employee_id: string
          employee_name: string
          first_aider_name: string
          id: string
          incident_date: string
          injury_type: string
          location: string
          photo_url: string | null
          remarks: string | null
          treatment_given: string
          user_id: string
        }
        Insert: {
          created_at?: string
          employee_id: string
          employee_name: string
          first_aider_name: string
          id?: string
          incident_date: string
          injury_type: string
          location: string
          photo_url?: string | null
          remarks?: string | null
          treatment_given: string
          user_id: string
        }
        Update: {
          created_at?: string
          employee_id?: string
          employee_name?: string
          first_aider_name?: string
          id?: string
          incident_date?: string
          injury_type?: string
          location?: string
          photo_url?: string | null
          remarks?: string | null
          treatment_given?: string
          user_id?: string
        }
        Relationships: []
      }
      near_miss_incidents: {
        Row: {
          area_department: string
          created_at: string
          gps_coordinates: string | null
          id: string
          incident_description: string
          location: string
          photo_url: string | null
          potential_consequence: string
          preventive_action: string
          status: string | null
          user_id: string
        }
        Insert: {
          area_department: string
          created_at?: string
          gps_coordinates?: string | null
          id?: string
          incident_description: string
          location: string
          photo_url?: string | null
          potential_consequence: string
          preventive_action: string
          status?: string | null
          user_id: string
        }
        Update: {
          area_department?: string
          created_at?: string
          gps_coordinates?: string | null
          id?: string
          incident_description?: string
          location?: string
          photo_url?: string | null
          potential_consequence?: string
          preventive_action?: string
          status?: string | null
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          department: string | null
          designation: string | null
          email: string | null
          employee_id: string
          full_name: string
          id: string
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          department?: string | null
          designation?: string | null
          email?: string | null
          employee_id: string
          full_name: string
          id?: string
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          department?: string | null
          designation?: string | null
          email?: string | null
          employee_id?: string
          full_name?: string
          id?: string
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      safety_observations: {
        Row: {
          corrective_action: string | null
          created_at: string
          description: string
          gps_coordinates: string | null
          id: string
          location: string
          photo_url: string | null
          severity: string
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          corrective_action?: string | null
          created_at?: string
          description: string
          gps_coordinates?: string | null
          id?: string
          location: string
          photo_url?: string | null
          severity: string
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          corrective_action?: string | null
          created_at?: string
          description?: string
          gps_coordinates?: string | null
          id?: string
          location?: string
          photo_url?: string | null
          severity?: string
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      sic_meetings: {
        Row: {
          action_points: string
          created_at: string
          id: string
          meeting_date: string
          next_meeting_date: string | null
          participants: string[]
          project_site: string
          safety_issues: string
          user_id: string
        }
        Insert: {
          action_points: string
          created_at?: string
          id?: string
          meeting_date: string
          next_meeting_date?: string | null
          participants: string[]
          project_site: string
          safety_issues: string
          user_id: string
        }
        Update: {
          action_points?: string
          created_at?: string
          id?: string
          meeting_date?: string
          next_meeting_date?: string | null
          participants?: string[]
          project_site?: string
          safety_issues?: string
          user_id?: string
        }
        Relationships: []
      }
      stop_work_orders: {
        Row: {
          corrective_action_verified: boolean | null
          created_at: string
          id: string
          issued_by: string
          photo_url: string | null
          project_location: string
          reason: string
          received_by: string
          resume_time: string | null
          stop_time: string
          unsafe_description: string
          user_id: string
        }
        Insert: {
          corrective_action_verified?: boolean | null
          created_at?: string
          id?: string
          issued_by: string
          photo_url?: string | null
          project_location: string
          reason: string
          received_by: string
          resume_time?: string | null
          stop_time: string
          unsafe_description: string
          user_id: string
        }
        Update: {
          corrective_action_verified?: boolean | null
          created_at?: string
          id?: string
          issued_by?: string
          photo_url?: string | null
          project_location?: string
          reason?: string
          received_by?: string
          resume_time?: string | null
          stop_time?: string
          unsafe_description?: string
          user_id?: string
        }
        Relationships: []
      }
      training_sessions: {
        Row: {
          attendance_photo_url: string | null
          contractor_name: string | null
          created_at: string
          duration_end: string
          duration_start: string
          id: string
          participants_count: number
          topic_covered: string
          trainer_name: string
          training_type: string
          user_id: string
        }
        Insert: {
          attendance_photo_url?: string | null
          contractor_name?: string | null
          created_at?: string
          duration_end: string
          duration_start: string
          id?: string
          participants_count: number
          topic_covered: string
          trainer_name: string
          training_type: string
          user_id: string
        }
        Update: {
          attendance_photo_url?: string | null
          contractor_name?: string | null
          created_at?: string
          duration_end?: string
          duration_start?: string
          id?: string
          participants_count?: number
          topic_covered?: string
          trainer_name?: string
          training_type?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
