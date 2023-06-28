import { g, auth, config } from '@grafbase/sdk'

const User= g.model('User',{
  name: g.string().length({min:2, max:15}),
  wmail:g.string().unique(),
  avatarUrl:g.url(),
  description:g.string().optional(),
  githuburl:g.url().optional(),
  projects: g.relation(()=>Project).list().optional(),
})

const Project=g.model('Project',{
  title:g.string().length({min:3}),
  description:g.string(),
  image:g.url(),
  liveSiteUrl:g.url(),
  githuburl:g.url(),
  category:g.string().search(),
  createdBy:g.relation(() => User),


})

export default config({
  schema: g

})
