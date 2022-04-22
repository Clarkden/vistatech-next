// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from '../../lib/dbConnect'
import Request from '../../models/request'

export default async function handler(req, res) {
  //res.status(200).json({ contact: req.body })

  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const requests = await Request.find({})
        res.status(200).json({ success: true, data: requests })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const requests = await Request.create(req.body)
        res.redirect('/contact')
      } catch (error) {
        res.status(400).json({ success: false, error: error})
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
