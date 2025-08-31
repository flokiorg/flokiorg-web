export const throwErrorIfEnvVarsNotFound = () => {
  if (!process.env.NEXT_PUBLIC_DONATION_URL) {
    throw new Error("NEXT_PUBLIC_DONATION_URL not set in environment variables");
  }
};
