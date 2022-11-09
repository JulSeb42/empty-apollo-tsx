/*=============================================== Hello query ===============================================*/

export const HelloQuery = {
    hello: async (_: any, __: any, { hello }: any) => await hello(),
}
