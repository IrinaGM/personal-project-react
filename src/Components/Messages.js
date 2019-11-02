import React from "react";

export const ErrMessage = ({msg}) => {
    return  <div class="alert alert-secondary" role="alert">
                {msg}
            </div>
};

export const LoadingMessage = ({msg}) => {
    return  <div class="alert alert-primary" role="alert">
                {msg}
            </div>
};