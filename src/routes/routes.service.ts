import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route, RouteDocument } from './entities/route.entity';

@Injectable()
export class RoutesService {
  constructor(
    @InjectModel(Route.name)
    private routesModule: Model<RouteDocument>,
  ) {
    //
  }

  async create({
    endPosition,
    startPosition,
    title,
  }: CreateRouteDto): Promise<RouteDocument> {
    const route = this.routesModule.create({
      endPosition,
      startPosition,
      title,
    });
    return route;
  }

  async findAll(): Promise<Route[]> {
    const routes = await this.routesModule.find().exec();
    return routes;
  }

  async findOne(id: string): Promise<Route> {
    const routes = await this.routesModule.findById(id).exec();
    return routes;
  }

  async update(id: string, updateRouteDto: UpdateRouteDto): Promise<Route> {
    await this.routesModule.updateOne({ _id: id }, updateRouteDto).exec();

    const route = await this.routesModule.findById(id).exec();
    return route;
  }

  async remove(id: string) {
    await this.routesModule.remove({ _id: id }).exec();
  }
}
