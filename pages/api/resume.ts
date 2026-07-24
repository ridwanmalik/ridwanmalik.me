import type { NextApiRequest, NextApiResponse } from "next"
import { createElement } from "react"
import { renderToBuffer } from "@react-pdf/renderer"
import ResumeDocument from "@/lib/resume/ResumeDocument"

// Pages Router API routes run as plain Node (no React Server condition), so
// @react-pdf/renderer's reconciler receives a matching React instance.
const FILE_NAME = "Sk-Ridwanul-Malik-Resume.pdf"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const buffer = await renderToBuffer(createElement(ResumeDocument))

  res.setHeader("Content-Type", "application/pdf")
  res.setHeader("Content-Disposition", `attachment; filename="${FILE_NAME}"`)
  res.setHeader("Cache-Control", "no-store")
  res.status(200).send(buffer)
}

export default handler
