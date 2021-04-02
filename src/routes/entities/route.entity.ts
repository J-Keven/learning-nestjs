import { Schema, Prop, raw, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
interface IPosition {
  lat: number;
  lng: number;
}

type RouteDocument = Route & Document;

@Schema()
class Route {
  @Prop()
  title: string;

  @Prop(
    raw({
      lat: { type: Number },
      lng: { type: Number },
    }),
  )
  startPosition: IPosition;

  @Prop(
    raw({
      lat: { type: Number },
      lng: { type: Number },
    }),
  )
  endPosition: IPosition;
}

const RouteSchema = SchemaFactory.createForClass(Route);

export { RouteDocument, Route, RouteSchema };
