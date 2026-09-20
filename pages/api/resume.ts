import type { NextApiRequest, NextApiResponse } from "next"
import { createElement } from "react"
import { renderToBuffer } from "@react-pdf/renderer"
import ResumeDocument from "@/lib/resume/ResumeDocument"

// Pages Router API routes run as plain Node (no React Server condition), so
// @react-pdf/renderer's reconciler receives a matching React instance.
const FILE_NAME = "Sk-Ridwanul-Malik-Resume.pdf"

// The summary line stays around two lines on A4, so an over-long title would
// push the layout. Titles in job postings are comfortably inside this.
const MAX_TITLE_LENGTH = 60

// Job titles only: letters, digits, spaces and the punctuation that shows up in
// real postings ("Senior Full-Stack Engineer (Laravel/ReactJS)"). Anything else
// is dropped rather than rendered into the PDF.
const TITLE_PATTERN = /^[A-Za-z0-9 ()/,.\-+&]+$/

const parseTitle = (raw: NextApiRequest["query"][string]) => {
  const value = Array.isArray(raw) ? raw[0] : raw
  if (!value) return undefined

  const title = value.trim().replace(/\s+/g, " ")
  if (!title || title.length > MAX_TITLE_LENGTH) return undefined
  if (!TITLE_PATTERN.test(title)) return undefined

  return title
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const title = parseTitle(req.query.title)
  const buffer = await renderToBuffer(createElement(ResumeDocument, { title }))

  res.setHeader("Content-Type", "application/pdf")
  res.setHeader("Content-Disposition", `attachment; filename="${FILE_NAME}"`)
  res.setHeader("Cache-Control", "no-store")
  res.status(200).send(buffer)
}

export default handler
