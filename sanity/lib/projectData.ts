import { groq } from "next-sanity";
import { client } from "./client";

const query = groq`
    *[_type=='post'] {
        ...,
    } | order(projectNumber desc)`;

export const projects = await client.fetch(query);