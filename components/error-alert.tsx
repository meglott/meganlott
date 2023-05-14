import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function ErrorAlert() {
    console.log("Showing error alert");
    return (
        <div id="error-alert" 
            className="flex w-5/6 p-2 mb-4 items-center text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" 
            role="alert">
            <XCircleIcon className="h-8"/>
            <span className="sr-only">Info</span>
            <div className="ml-3 text-sm font-medium">
                Error sending email. Please try again later.
            </div>
            <button 
                type="button" 
                className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-800 rounded-lg p-1.5 inline-flex h-8 w-8 dark:bg-gray-800" 
                data-dismiss-target="#error-alert" 
                aria-label="Close">
                <span className="sr-only">Close</span>
                <XMarkIcon className="fill-red-800" />
            </button>
        </div>
    );
}