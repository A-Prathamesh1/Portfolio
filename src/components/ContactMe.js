import { useForm, ValidationError } from '@formspree/react';
import Classes from './ContactMe.module.css';

export default function ContactMe() {
        const [state, handleSubmit] = useForm('myyawqoj');
        if (state.succeeded) {
                return <p>Feedback sent!</p>;
        }
        return (
                <>
                        <h1>Send a feedback message</h1>
                        <form
                                onSubmit={handleSubmit}
                                className={Classes.inputform}
                        >
                                <label htmlFor="email">
                                        Email
                                        <input
                                                id="email"
                                                type="email"
                                                name="email"
                                        />
                                </label>

                                <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                />
                                <label htmlFor="message">
                                        Message
                                        <textarea id="message" name="message" />
                                </label>

                                <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                />

                                <button
                                        type="submit"
                                        disabled={state.submitting}
                                >
                                        Submit
                                </button>
                        </form>
                </>
        );
}
