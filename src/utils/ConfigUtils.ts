export const throwErrorIfEnvVarsNotFound = () => {
  if (!process.env.NEXT_PUBLIC_DONATION_APIKEY) {
    throw new Error("NEXT_PUBLIC_DONATION_APIKEY not set in environment variables");
  }
};
