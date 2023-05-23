import { Arg, Mutation, Resolver } from "type-graphql";
import Country from "../entity/Country";
import db from "../db";
import { ApolloError } from "apollo-server";

interface CountryInput {
  code: string;
  name: string;
  emoji: string;
}

@Resolver(Country)
export class CountryResolver {
  @Mutation(() => Country)
  async createCountry(@Arg("data") data: CountryInput): Promise<Country> {
    const existingCountry = await db
      .getRepository(Country)
      .find({ where: { code: data.code } });

    if (existingCountry !== null)
      throw new ApolloError("COUNTRY_ALREADY_EXISTS");

    return await db.getRepository(Country).save({
      code: data.code,
      name: data.name,
      emoji: data.emoji,
    });
  }
}
