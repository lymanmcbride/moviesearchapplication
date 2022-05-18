import createRepository from '../Repositories/MoviesRepository'

export default (ctx: any, inject: any) => {
  inject('repositories', createRepository(ctx.$axios))
}
