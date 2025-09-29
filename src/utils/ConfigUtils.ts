export const throwErrorIfEnvVarsNotFound = () => {
  const hasWofDonation = Boolean(process.env.NEXT_PUBLIC_DONATION_WOF_URL);
  const hasEcosystemDonation = Boolean(
    process.env.NEXT_PUBLIC_DONATION_ECOSYSTEM_URL,
  );

  if (!hasWofDonation) {
    throw new Error(
      "NEXT_PUBLIC_DONATION_WOF_URL not set in environment variables",
    );
  }

  if (!hasEcosystemDonation) {
    throw new Error(
      "NEXT_PUBLIC_DONATION_ECOSYSTEM_URL not set in environment variables",
    );
  }
};
