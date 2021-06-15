import { IsNotEmpty } from "class-validator";

export class Todo {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
