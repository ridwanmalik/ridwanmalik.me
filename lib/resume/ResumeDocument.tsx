import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer"
import { PERSONAL_INFO, TECH_STACK, EXPERIENCES, PROJECTS, SOCIAL_LINKS } from "@/lib/constants"

// Print-friendly palette (the site's mint accent is too light on white paper)
const COLORS = {
  ink: "#0A192F",
  body: "#334155",
  muted: "#64748B",
  accent: "#0F766E",
  line: "#E2E8F0",
}

const styles = StyleSheet.create({
  page: {
    paddingVertical: 36,
    paddingHorizontal: 44,
    fontSize: 9.5,
    fontFamily: "Helvetica",
    color: COLORS.body,
    lineHeight: 1.45,
  },
  name: { fontSize: 22, fontFamily: "Helvetica-Bold", color: COLORS.ink, letterSpacing: 0.5 },
  title: { fontSize: 11, color: COLORS.accent, marginTop: 3, fontFamily: "Helvetica-Bold" },
  contactRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 7, fontSize: 9, color: COLORS.muted },
  contactItem: { marginRight: 6 },
  contactLink: { color: COLORS.accent, textDecoration: "none" },
  section: { marginTop: 16 },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: COLORS.ink,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    borderBottom: `1px solid ${COLORS.line}`,
    paddingBottom: 3,
    marginBottom: 7,
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
    marginBottom: 5,
  },
  job: { marginBottom: 11 },
  jobHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  jobRole: { fontSize: 10, fontFamily: "Helvetica-Bold", color: COLORS.ink },
  jobCompany: { fontSize: 10, color: COLORS.accent, fontFamily: "Helvetica-Bold" },
  jobPeriod: { fontSize: 8.5, color: COLORS.muted, textAlign: "right", minWidth: 110 },
  bulletRow: { flexDirection: "row", marginTop: 3 },
  bulletDot: { width: 10, color: COLORS.accent },
  bulletText: { flex: 1, color: COLORS.body },
  project: { marginBottom: 9 },
  projectTitle: { fontSize: 9.5, fontFamily: "Helvetica-Bold", color: COLORS.ink },
  projectTech: { fontSize: 8, color: COLORS.accent, marginTop: 1 },
  projectDesc: { marginTop: 2, color: COLORS.body },
})

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
            <Link src={`mailto:${PERSONAL_INFO.email}`} style={[styles.contactItem, styles.contactLink]}>
              {PERSONAL_INFO.email}
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
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summary}>{PERSONAL_INFO.description}</Text>
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
          {EXPERIENCES.filter(job => !(job as { hideFromResume?: boolean }).hideFromResume).map(job => (
            <View key={`${job.company}-${job.period}`} style={styles.job} wrap={false}>
              <View style={styles.jobHeader}>
                <Text style={styles.jobRole}>
                  {job.role} <Text style={styles.jobCompany}>@ {job.company}</Text>
                </Text>
                <Text style={styles.jobPeriod}>{job.period}</Text>
              </View>
              {job.description.map((line, i) => (
                <View key={i} style={styles.bulletRow}>
                  <Text style={styles.bulletDot}>•</Text>
                  <Text style={styles.bulletText}>{line}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Selected Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Selected Projects</Text>
          {PROJECTS.featured.map(project => (
            <View key={project.title} style={styles.project} wrap={false}>
              <Text style={styles.projectTitle}>
                {project.title}
                {project.external ? (
                  <Link src={project.external} style={styles.contactLink}>
                    {"  "}
                    {stripProtocol(project.external)}
                  </Link>
                ) : null}
              </Text>
              <Text style={styles.projectTech}>{project.tech.join(" · ")}</Text>
              <Text style={styles.projectDesc}>{project.description}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  )
}

export default ResumeDocument
