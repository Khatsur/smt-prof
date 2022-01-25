import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Row, Col } from '../../ui/wrapper'
import useFormUrl from '../useFormUrl'
import Form, { FormGroup, Input, Textarea, Error } from '../../ui/form'
import Button from '../../ui/button'

const ContactForm = () => {
    const formUrl = useFormUrl();
    const { register, handleSubmit, errors, reset } = useForm({
        mode: "onBlur"
    })

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };

    const onSubmit = (data, e) => {
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: formUrl,
            data: data
        })
            .then(r => {
                handleServerResponse(true, "Дякую за ваш запит!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row gutters={{ lg: 20 }}>
                <Col lg={6}>
                    <FormGroup mb="20px">
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Ім’я *"
                            ref={register({ required: 'Введіть ім’я' })}
                        />
                        <Error>{errors.name && errors.name.message}</Error>
                    </FormGroup>
                </Col>
                <Col lg={6}>
                    <FormGroup mb="20px">
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Пошта *"
                            ref={register({
                                required: 'Введіть адресу пошти',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Неправильна адреса електронної пошти"
                                }
                            })}
                        />
                        <Error>{errors.email && errors.email.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row gutters={{ lg: 20 }}>
                <Col lg={6}>
                    <FormGroup mb="20px">
                        <Input
                            type="text"
                            name="company"
                            id="company"
                            placeholder="Компанія *"
                            ref={register({ required: 'Введіть назву компанії' })}
                        />
                        <Error>{errors.company && errors.company.message}</Error>
                    </FormGroup>
                </Col>
                <Col lg={6}>
                    <FormGroup mb="20px">
                        <Input
                            type="tel"
                            name="tel"
                            id="tel"
                            placeholder="Телефон *"
                            ref={register({
                                required: 'Введіть номер телефону',
                                pattern: {
                                    value: /^[+]?[0-9() -]*$/i,
                                    message: "Неправильний номер телефону"
                                }
                            })}
                        />
                        <Error>{errors.tel && errors.tel.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <FormGroup mb="20px">
                        <Input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Тема *"
                            ref={register({ required: 'Тема запиту' })}
                        />
                        <Error>{errors.subject && errors.subject.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <FormGroup mb="30px">
                        <Textarea
                            name="message"
                            id="message"
                            placeholder="Будь ласка, напишіть ваш запит."
                            ref={register({
                                required: 'Напишіть ваш запит.',
                                maxLength: {
                                    value: 150,
                                    message: "Максимальна довжина тексту 150 символів"
                                },
                                minLength: {
                                    value: 10,
                                    message: "Мінімальна довжина тексту 10 символів"
                                }
                            })}
                        ></Textarea>
                        <Error>{errors.message && errors.message.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Button type="submit" disabled={serverState.submitting}>Надіслати повідомлення</Button>
                    {serverState.status && (
                        <p className={`form-output ${!serverState.status.ok ? "errorMsg" : "success"}`}>
                            {serverState.status.msg}
                        </p>
                    )}
                </Col>
            </Row>
        </Form>
    )
}

export default ContactForm;