exports.resolvers = {
    Query: {
        highlights: () => highlights,
        highlight: (parent, args) => {
            return highlight.find(highlight => highlight.id === args.id);
        }
    }
}