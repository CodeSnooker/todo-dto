import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Employee extends Document {
  @Prop({ type: "String" })
  _id?: string;

  @Prop({ type: "String" })
  name?: string;

  @Prop({ type: "Number" })
  salary?: number;

  @Prop({ type: "String" })
  designation?: string;
}
