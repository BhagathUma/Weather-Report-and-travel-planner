export interface AIInsights {
  summary: string;
  overall_weather: string;

  purpose_specific_advice: string[];

  clothing_recommendations: string[];

  warnings: string[];

  best_days: string[];

  worst_days: string[];

  generated_by: string;

  confidence_score: number;
}

export interface AnalyzeWeatherResponse {

  success: boolean;

  analysis_id: string;

  cache_hit: boolean;

  location: string;

  forecast: any;

  ai_insights: AIInsights;
}