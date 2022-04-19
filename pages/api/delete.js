// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../lib/dbConnect'
import Request from '../../models/request'


export default async function handler(req, res) {

  const { method } = req

  //return res.json({request: method, id: req.params.id})

  await dbConnect()


  switch (method) {
    case 'POST':
      try {
        //console.log(req.params.id)
        const requests = await Request.deleteOne({ _id: req.body.id  })
        //res.status(200).json({ success: true})
        res.redirect('/manage').status(200)
      } catch (error) {
        res.status(400).json({ success: false, error: error})
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  
  }
}
