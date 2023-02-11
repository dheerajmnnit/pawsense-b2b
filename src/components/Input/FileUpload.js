import React from "react";
import { classNames } from "../../utils/helpers/common";

const FileUpload = ({
    id = "file-upload",
    label = "",
    placeholder = null,
    required = false,
    error = "",
    fullWidth = false,
}) => {
    return (
        <div
            className={classNames(
                "flex flex-col items-start",
                fullWidth ? "w-full" : ""
            )}
        >
            {label && (
                <label
                    className={classNames(
                        "text-base text-text-color-1 mb-2",
                        error ? "text-red-600" : ""
                    )}
                >
                    {label} {required && <span className="text-red-600">*</span>}
                </label>
            )}
            <div className="flex items-center justify-center w-full">
                <label
                    for={id}
                    className="flex flex-col items-center justify-center w-full border-2 border-text-color-1 border-dashed gap-4 rounded-lg cursor-pointer bg-transparent"
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                            aria-hidden="true"
                            className="w-16 h-16 mb-3 text-text-color-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                        </svg>
                        {placeholder}
                    </div>
                    <input id={id} type="file" className="hidden" />
                </label>
            </div>
        </div>
    );
};

export default FileUpload;
