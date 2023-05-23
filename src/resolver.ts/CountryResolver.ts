import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Country, { CountryInput } from "../entity/Country";
import db from "../db";
import { ApolloError } from "apollo-server";
import { Code } from "typeorm";

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    const country = await db.getRepository(Country).find();
    return country;
  }

  @Query(() => Country)
  async getCountryByCode(@Arg("code") code: string): Promise<Country> {
    const existingCountry = await db
      .getRepository(Country)
      .findOne({ where: { code: code } });

    if (existingCountry === null)
      throw new ApolloError("Country not found", "NOT_FOUND");

    return existingCountry;
  }

  @Mutation(() => Country)
  async createCountry(@Arg("data") data: CountryInput): Promise<Country> {
    const existingCountry = await db
      .getRepository(Country)
      .findOne({ where: { code: data.code } });

    if (existingCountry !== null)
      throw new ApolloError("COUNTRY_ALREADY_EXISTS");

    const { raw: id } = await db.getRepository(Country).insert(data);

    return { id, ...data };
  }
}
