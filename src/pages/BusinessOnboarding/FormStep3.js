import React from "react";

import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Link from "../../components/Link";
import FileUpload from "../../components/Input/FileUpload";

const FormStep3 = ({ handlePrev, onSuccess }) => {
    return (
        <form className="mt-10 flex flex-col items-center gap-5">
            <FileUpload
                label="Document Upload for verification"
                placeholder={
                    <>
                        <p className="mb-2 text-sm text-text-color-3">
                            Tap to upload your document
                        </p>
                        {/* <p className="text-xs text-text-color-3">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p> */}
                    </>
                }
                fullWidth
                required
            />

            <div className="w-full flex items-center justify-start gap-1">
                <Checkbox />
                <span>
                    I agree to all the{" "}
                    <Link to="/terms-and-conditions">Terms and Condtions</Link> that apply
                </span>
            </div>

            <div className="flex items-center justify-between gap-3 mt-3 z-20">
                <Button
                    label="Privious"
                    variant="secondary"
                    className="bg-transparent"
                    onClick={handlePrev}
                />

                <Button label="Finish" variant="primary" onClick={onSuccess} />
            </div>
        </form>
    );
};

export default FormStep3;
