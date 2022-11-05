import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, Loader,Form } from 'semantic-ui-react';


const EditNote = ({note}) => {
    const [form, setForm] = useState({ title: note.title, description: note.description });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                updateNote();
                //alert("CRIOU!");
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const updateNote = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/notes/${router.query.id}`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {};

        if (!form.title) {
            err.title = 'Coloque um titulo';
        }
        if (!form.description) {
            err.description = 'Descrição necessária';
        }

        return err;
    }

    return (
        <div className="form-container">
            <h1>Alterar uma Nota</h1>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                error={errors.title ? { content: 'Insira um titulo', pointing: 'below' } : null}
                                value={form.title}
                                label='Titulo'
                                placeholder='Titulo'
                                name='title'
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                fluid
                                label='Descrição'
                                placeholder='Descrição'
                                name='description'
                                error={errors.description ? { content: 'Insira a descrição', pointing: 'below' } : null}
                                value={form.description}
                                onChange={handleChange}
                            />
                            <Button type='submit'>Alterar</Button>
                        </Form>
                }
            </div>
        </div>
    )
}




EditNote.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`);
    const { data } = await res.json();

    return { note: data }
}

export default EditNote;