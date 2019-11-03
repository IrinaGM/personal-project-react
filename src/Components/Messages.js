import React from "react";

export const ErrMessage = ({msg}) => {
    return  <div className="alert alert-secondary mt-3" role="alert">
                {msg}
            </div>
};

export const LoadingMessage = ({msg}) => {
    return  <div className="alert alert-primary mt-3" role="alert">
                {msg}
            </div>
};