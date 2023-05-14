import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function SuccessAlert() {
    console.log("Showing alert");
    return (
        <div id="success-alert" 
            className="flex w-5/6 p-2 mb-4 items-center text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" 
            role="success-alert">
            <CheckCircleIcon className="h-8"/>
            <span className="sr-only">Info</span>
            <div className="ml-3 text-sm font-medium">
                Email successfully sent.
            </div>
            <button 
                type="button" 
                className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-800 rounded-lg p-1.5 inline-flex h-8 w-8 dark:bg-gray-800" 
                data-dismiss-target="#success-alert" 
                aria-label="Close">
                <span className="sr-only">Close</span>
                <XMarkIcon className="fill-green-800" />
            </button>
        </div>
    );
}