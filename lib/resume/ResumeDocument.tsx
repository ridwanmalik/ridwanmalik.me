import { CERTIFICATIONS, EXPERIENCES, PERSONAL_INFO, PROJECTS, SOCIAL_LINKS, TECH_STACK } from "@/lib/constants"
import { Document, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer"

// Print-friendly palette (the site's mint accent is too light on white paper)
const COLORS = {
  ink: "#0A192F",
  body: "#334155",
  muted: "#64748B",
  accent: "#0F766E",
  heading: "#2079c7",
  line: "#E2E8F0",
}

const styles = StyleSheet.create({
  page: {
    paddingVertical: 28,
    paddingHorizontal: 40,
    fontSize: 9,
    fontFamily: "Helvetica",
    color: COLORS.body,
    lineHeight: 1.35,
  },
  name: { fontSize: 20, fontFamily: "Helvetica-Bold", color: COLORS.ink, letterSpacing: 0.5 },
  title: { fontSize: 10.5, color: COLORS.accent, marginTop: 2, fontFamily: "Helvetica-Bold" },
  contactRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 5, fontSize: 8.5, color: COLORS.muted },
  contactItem: { marginRight: 6 },
  contactLink: { color: COLORS.heading, textDecoration: "none" },
  contactPlain: { color: COLORS.body, textDecoration: "none" },
  section: { marginTop: 8 },
  sectionTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: COLORS.heading,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    borderBottom: `1px solid ${COLORS.line}`,
    paddingBottom: 2,
    marginBottom: 5,
  },
  summary: { color: COLORS.body },
  skillsRow: { flexDirection: "row", flexWrap: "wrap" },
  skill: {
    fontSize: 8.5,
    color: COLORS.ink,
    backgroundColor: "#F1F5F9",
    borderRadius: 3,
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginRight: 5,
    marginBottom: 4,
  },
  job: { marginBottom: 7 },
  jobHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  jobRole: { flex: 1, paddingRight: 8, fontSize: 9.5, fontFamily: "Helvetica-Bold", color: COLORS.ink },
  jobCompany: { fontSize: 9.5, color: COLORS.accent, fontFamily: "Helvetica-Bold" },
  jobPeriod: { fontSize: 8, color: COLORS.muted, textAlign: "right" },
  bulletRow: { flexDirection: "row", marginTop: 2 },
  bulletDot: { width: 9, color: COLORS.accent },
  bulletText: { flex: 1, color: COLORS.body },
  project: { marginBottom: 5 },
  projectHeading: { fontSize: 9, color: COLORS.ink },
  projectTitle: { fontFamily: "Helvetica-Bold", color: COLORS.ink },
  projectTech: { color: COLORS.accent },
  projectDesc: { marginTop: 1, color: COLORS.body },
  certText: { color: COLORS.body },
  certName: { fontFamily: "Helvetica-Bold", color: COLORS.heading, textDecoration: "none" },
  eduInstitution: { fontFamily: "Helvetica", color: COLORS.body },
})

// Roles to show and bullets per role, tuned to keep the resume to one page.
// The most recent roles get more detail; older roles are condensed to a single bullet.
const MAX_ROLES = 7
const ROLES_WITH_FULL_BULLETS = 3
const FULL_BULLETS = 2
const CONDENSED_BULLETS = 1

const firstSentence = (text: string) => {
  const idx = text.indexOf(". ")
  return idx === -1 ? text : text.slice(0, idx + 1)
}

// Resume-only sections
const EDUCATION = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "BUBT, Dhaka",
    period: "2020 – Present",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "BCMC College of Engineering & Technology, Jashore",
    period: "2016 – 2021 · CGPA 3.8/4",
  },
]
const LANGUAGES = ["English (Fluent)", "Bangla (Native)", "Spanish (Basic)", "Hindi (Fluent)"]

const getSocial = (name: string) => SOCIAL_LINKS.find(link => link.name === name)?.url ?? ""
const stripProtocol = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "")

const ResumeDocument = () => {
  const github = getSocial("GitHub")
  const linkedin = getSocial("LinkedIn")

  return (
    <Document
      author={PERSONAL_INFO.name}
      title={`${PERSONAL_INFO.name} — Resume`}
      subject="Full Stack Web Developer Resume">
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View>
          <Text style={styles.name}>{PERSONAL_INFO.name}</Text>
          <Text style={styles.title}>Full Stack Web Developer</Text>
          <View style={styles.contactRow}>
            <Link src={`mailto:${PERSONAL_INFO.email}`} style={[styles.contactItem, styles.contactPlain]}>
              {PERSONAL_INFO.email}
            </Link>
            <Text style={styles.contactItem}>|</Text>
            <Link
              src={`tel:${PERSONAL_INFO.phone.replace(/[\s-]/g, "")}`}
              style={[styles.contactItem, styles.contactPlain]}>
              {PERSONAL_INFO.phone}
            </Link>
            {linkedin ? (
              <>
                <Text style={styles.contactItem}>|</Text>
                <Link src={linkedin} style={[styles.contactItem, styles.contactLink]}>
                  {stripProtocol(linkedin)}
                </Link>
              </>
            ) : null}
            {github ? (
              <>
                <Text style={styles.contactItem}>|</Text>
                <Link src={github} style={[styles.contactItem, styles.contactLink]}>
                  {stripProtocol(github)}
                </Link>
              </>
            ) : null}
            <Text style={styles.contactItem}>|</Text>
            <Text style={styles.contactItem}>{PERSONAL_INFO.location}</Text>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summary}>{PERSONAL_INFO.resumeSummary}</Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillsRow}>
            {TECH_STACK.map(skill => (
              <Text key={skill} style={styles.skill}>
                {skill}
              </Text>
            ))}
          </View>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {EXPERIENCES.filter(job => !(job as { hideFromResume?: boolean }).hideFromResume)
            .slice(0, MAX_ROLES)
            .map((job, index) => {
              const bulletLimit = index < ROLES_WITH_FULL_BULLETS ? FULL_BULLETS : CONDENSED_BULLETS
              // A role may override which bullets the resume shows (e.g. lead with React work)
              const bullets = (job as { resumeBullets?: string[] }).resumeBullets ?? job.description
              return (
                <View key={`${job.company}-${job.period}`} style={styles.job} wrap={false}>
                  <View style={styles.jobHeader}>
                    <Text style={styles.jobRole}>
                      {job.role} <Text style={styles.jobCompany}>@ {job.company}</Text>
                    </Text>
                    <Text style={styles.jobPeriod}>{job.period}</Text>
                  </View>
                  {bullets.slice(0, bulletLimit).map((line, i) => (
                    <View key={i} style={styles.bulletRow}>
                      <Text style={styles.bulletDot}>•</Text>
                      <Text style={styles.bulletText}>{line}</Text>
                    </View>
                  ))}
                </View>
              )
            })}
        </View>

        {/* Selected Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {PROJECTS.featured.map(project => (
            <View key={project.title} style={styles.project} wrap={false}>
              <Text style={styles.projectHeading}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectTech}> — {project.tech.join(", ")}</Text>
                {project.external ? (
                  <Link src={project.external} style={styles.contactLink}>
                    {"  "}
                    {stripProtocol(project.external)}
                  </Link>
                ) : null}
              </Text>
              <Text style={styles.projectDesc}>{firstSentence(project.description)}</Text>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {EDUCATION.map(edu => (
            <View key={edu.degree} style={styles.job} wrap={false}>
              <View style={styles.jobHeader}>
                <Text style={styles.jobRole}>
                  {edu.degree} <Text style={styles.eduInstitution}>— {edu.institution}</Text>
                </Text>
                <Text style={styles.jobPeriod}>{edu.period}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          <Text style={styles.certText}>
            {CERTIFICATIONS.filter(cert => (cert as { resumeFeatured?: boolean }).resumeFeatured).map((cert, i) => (
              <Text key={cert.title}>
                {i > 0 ? "   •   " : ""}
                <Link src={cert.url} style={styles.certName}>
                  {cert.title}
                </Link>
              </Text>
            ))}
          </Text>
        </View>

        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages</Text>
          <Text style={styles.certText}>
            {LANGUAGES.map((lang, i) => (
              <Text key={lang}>
                {i > 0 ? "   •   " : ""}
                {lang}
              </Text>
            ))}
          </Text>
        </View>
      </Page>
    </Document>
  )
}

export default ResumeDocument
