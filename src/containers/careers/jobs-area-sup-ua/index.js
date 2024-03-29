import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import Button from '../../../components/ui/button'
import { SectionWrap, JobList, JobItem, JobTitle, JobType, JobDesc, JobButton } from './style'

const JobsArea = () => {
    const getJobsData = useStaticQuery(graphql`
        query GET_JOBS_DATA_SUP_UA {
            intro: careersSupUaJson(id: {eq: "careers-section-intro-sup-ua"}) {
                title
            }
            jobs: careersSupUaJson(id: {eq: "our-open-jobs-sup-ua"}) {
                jobs {
                    id
                    title
                    type
                    description
                }
            }
        }      
    `);
    const { intro: { title }, jobs: { jobs } } = getJobsData

    return (
        <SectionWrap>
            <Container>
                <Row justify="center">
                    <Col lg={7}>
                        <SectionTitle title={title} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <JobList>
                            {jobs.map((job, i) => {
                                const isEven = i % 2 === 0;
                                return (
                                    <JobItem key={job.id} isEven={isEven}>
                                        <Row>
                                            <Col lg={3}>
                                                <JobTitle>{job.title}</JobTitle>
                                                <JobType>{job.type}</JobType>
                                            </Col>
                                            <Col lg={6}>
                                                <JobDesc>{job.description}</JobDesc>
                                            </Col>
                                            <Col lg={3}>
                                                <JobButton>
                                                    <Button to="/contact-us-form-ua" varient="outlined" bordercolor="#ddd">Запит</Button>
                                                </JobButton>
                                            </Col>
                                        </Row>
                                    </JobItem>
                                )
                            })}
                        </JobList>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

export default JobsArea
