import { ChangeEvent, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

	// States for the form fields
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phonenumber, setPhonenumber] = useState("");
	const [message, setMessage] = useState("");

	const showError = (e: Element | null) => {
		e?.classList.replace("focus:outline-button", "focus:outline-none");
		e?.classList.add("border-2");
		e?.classList.add("border-red-500");
	}

	const clearError = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
		if (e.target.classList.contains("border-red-500")) {
			e.target.classList.replace("border-red-500", "border-gray");
			e.target.classList.replace("border-2", "border");
			e.target.classList.replace("focus:outline-none", "focus:outline-button");
		}
	}

	const createErrorMessage = (field: string, message: string) => {
		let span = document.createElement("span");
		span.id = "error-span-" + field;
		span.textContent = message;
		span.style.color = "red";
		span.style.fontSize = "12px";
		return span;
	}

	const clearErrorMessage = (field: string) => {
		const emailDiv = document.querySelector(`#${field}-div`);
		const errorSpan = document.getElementById(`error-span-${field}`);
		if (errorSpan == null) 
			return;
		emailDiv?.removeChild(errorSpan);
	}

	const validateEmail = (email: string | null) => {
		return email?.match(
		  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
	  };

	const validatePhoneNumber = (phonenumber: string | null) => {
		return phonenumber?.match(
			/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
		);
	};

	const formValidation = () => {
		let isValid = true;

		if (firstName.length <= 0) {
			showError(document.querySelector("#first-name"));
			isValid = false;
		} 

		if (lastName.length <= 0) {
			showError(document.querySelector("#last-name"));
			isValid = false;
		}

		if (email.length <= 0) {
			showError(document.querySelector("#email"));
			isValid = false;
		} else if (!validateEmail(email)) {
			isValid = false;
			showError(document.querySelector("#email"));
			let emailDiv = document.querySelector("#email-div");
			if (!emailDiv?.contains(document.getElementById("error-span-email"))) {
				emailDiv?.appendChild(createErrorMessage("email", "Email is not valid."));
			}
		}

		if (phonenumber.length <= 0) {
			showError(document.querySelector("#phone-number"));
			isValid = false;
		} else if (!validatePhoneNumber(phonenumber)) {
			isValid = false;
			showError(document.querySelector("#phone-number"));
			let phoneNumberDiv = document.querySelector("#phone-number-div");
			if (!phoneNumberDiv?.contains(document.getElementById("error-span-phone-number"))) {
				phoneNumberDiv?.appendChild(createErrorMessage("phone-number", "Phone number is not valid."));
			}
		}

		if (message.length <= 0) {
			showError(document.querySelector("#message"));
			isValid = false;
		}

		return isValid;
	}

	const showSuccessToastMessage = () => {
        toast.success('Email successfully sent!', {
            position: toast.POSITION.BOTTOM_CENTER
        });
    };

	const showErrorToastMessage = () => {
        toast.error('Something went wrong. Please try again later.', {
            position: toast.POSITION.BOTTOM_CENTER
        });
    };

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
	
		let isValidForm = formValidation();
	
		if (isValidForm) {
		  const res = await fetch("/api/sendgrid", {
			body: JSON.stringify({
			  email: email,
			  firstname: firstName,
			  lastname: lastName,
			  phonenumber: phonenumber,
			  message: message,
			}),
			headers: {
			  "Content-Type": "application/json",
			},
			method: "POST",
		  });
	
		  const { error } = await res.json();
		  if (error) {
			showErrorToastMessage();
			return;
		  }
		} else {
			return;
		}

		(e.target as HTMLFormElement).reset();
		showSuccessToastMessage();
	  };

	return (
		<div 
		role="contact-page"
		id="contact-page"
		className="flex-1 w-full h-full bg-light-purple bg-splash-screen bg-no-repeat bg-center bg-contain">
            <div
				id="contact-content" 
				className="flex flex-col w-full h-full items-center justify-center"
			>
                <p className="text-heading text-light-green text-stroke">CONTACT ME</p>
				<form 
				id="contact-form"
				onSubmit={handleSubmit}
				className="w-5/12 mx-auto mt-10">
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div>
							<label className="block text-label">FIRST NAME</label>
							<input 
								type="text" 
								name="first-name" 
								id="first-name" 
								autoComplete="given-name"
								onChange={(e) => {
									clearError(e);
									setFirstName(e.target.value);
								  }} 
								className="block w-full rounded-md px-3.5 py-1.5 bg-white/60 border border-gray focus:outline-button"
							/>
						</div>
						<div>
							<label className="block text-label">LAST NAME</label>
							<input 
								type="text" 
								name="last-name" 
								id="last-name" 
								autoComplete="family-name" 
								onChange={(e) => {
									clearError(e);
									setLastName(e.target.value);
								  }}
								className="block w-full rounded-md px-3.5 py-1.5 bg-white/60 border border-gray focus:outline-button"
							/>
						</div>
					</div>
					<div 
						id="email-div"
						className="sm:col-span-2">
						<label className="block text-label mt-1">EMAIL</label>
						<input 
							type="text" 
							name="email" 
							id="email" 
							autoComplete="email"
							onChange={(e) => {
								let emailDiv = document.querySelector("#email-div");
								let errorSpan = document.getElementById("error-span-email");
								if (!emailDiv?.contains(errorSpan)) {
									clearError(e);
								} else {
									if (validateEmail(e.target.value)) {
										clearError(e);
										clearErrorMessage("email");
									}
								}
								setEmail(e.target.value);
							  }} 
							className="block w-full rounded-md px-3.5 py-1.5 bg-white/60 border border-gray focus:outline-button"
						/>
					</div>
					<div 
						id="phone-number-div"
						className="sm:col-span-2">
						<label className="block text-label mt-1">PHONE NUMBER</label>
						<input 
							type="tel" 
							name="phone-number" 
							id="phone-number" 
							autoComplete="tel"
							onChange={(e) => {
								let phoneNumberDiv = document.querySelector("#phone-number-div");
								let errorSpan = document.getElementById("error-span-phone-number");
								if (!phoneNumberDiv?.contains(errorSpan)) {
									clearError(e);
								} else {
									if (validatePhoneNumber(e.target.value)) {
										clearError(e);
										clearErrorMessage("phone-number");
									}

								}
								setPhonenumber(e.target.value);
							  }} 
							className="block w-full rounded-md px-3.5 py-1.5 bg-white/60 border border-gray focus:outline-button"
						/>
					</div>
					<div className="sm:col-span-2">
						<label className="block text-label mt-1">MESSAGE</label>
						<textarea 
							name="message" 
							id="message" 
							rows={4}
							onChange={(e) => {
								clearError(e);
								setMessage(e.target.value);
							  }}
							className="block w-full rounded-md px-3.5 py-1.5 bg-white/60 border border-gray focus:outline-button"
						/>
					</div>
					<div className="mt-8">
						<button 
							type="submit" 
							className="block h-10 w-full rounded-md px-3.5 py-1.5 text-white bg-button border border-gray">
							SEND
						</button>
						<ToastContainer />
					</div>
				</form>
            </div>
        </div>
	);
};