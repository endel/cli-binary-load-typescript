# Loading TypeScript file from executable CLI

This is just a PoC evaluating how to dynamically load a TypeScript file from a
executable Node.js binary. (Meant to be used on [colyseus/colyseus#594](https://github.com/colyseus/colyseus/issues/594))

> This is highly based on [@acro5piano](https://github.com/acro5piano)'s
> approach on [kysely-migration-cli](https://github.com/acro5piano/kysely-migration-cli)

---

### Installation

```
npm install
npm run build
```

### Usage

Execute providing the TypeScript file to load

```
./bin/bin.js ./testfile.ts
```

### License

MIT
