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
        //res.render('/contact')
        console.log('here')
        res.writeHead(302, {
          'Location': '/contact/?status=success'
          //add other headers here...
        });
        res.end()

        // const redirectURL =
        // process.env.NODE_ENV === 'development'
        // ? 'http://localhost:3000'
        // : 'https://soundman-productions.vercel.app/';

        // res.status(200).json({status: 200, message: "Successfully submitted request"})
      } catch (error) {
        // res.status(400).json({ success: false, error: error})
        res.writeHead(302, {
          'Location': '/contact/?status=error'
          //add other headers here...
        });
        res.end()
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
