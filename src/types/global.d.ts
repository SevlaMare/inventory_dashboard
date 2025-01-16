import React from 'react';

// ps theres no warn about missing imports
declare global {
  type FormSubmitEvent = React.FormEvent<HTMLFormElement>;
}
