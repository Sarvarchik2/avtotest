import { readFile } from "fs/promises";
import { join } from "path";
import { defineEventHandler, getRouterParam, createError } from "h3";

export default defineEventHandler(async(event) => {
    const id = getRouterParam(event, "id");
    if (!id)
        throw createError({
            statusCode: 400,
            statusMessage: "Ticket id is required",
        });
    const filePath = join(
        process.cwd(),
        "server",
        "data",
        "tickets",
        `${id}.json`
    );
    try {
        const raw = await readFile(filePath, "utf-8");
        const data = JSON.parse(raw);
        return data;
    } catch (e) {
        throw createError({ statusCode: 404, statusMessage: "Ticket not found" });
    }
});