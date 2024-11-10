import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface LikedSong {
  id: string;
  track_id: string;
  name: string;
  artist_name: string;
  image: string;
  audio: string;
  created_at: string;
}