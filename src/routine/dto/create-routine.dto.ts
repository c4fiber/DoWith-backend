import { IsNotEmpty } from "class-validator";

export class CreateRoutineDto {
  @IsNotEmpty()
  rout_name: string;
  
  rout_desc: string;
  rout_repeat: number;
  rout_srt: string;
  rout_end: string;
}