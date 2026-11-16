export const throwErrorIfEnvVarsNotFound = () => {
  const hasWofDonation = Boolean(process.env.NEXT_PUBLIC_DONATION_WOF_URL);
  const hasEcosystemDonation = Boolean(
    process.env.NEXT_PUBLIC_DONATION_ECOSYSTEM_URL,
  );

  // An unset donation URL hides its button; it no longer fails the build.
  if (!hasWofDonation) {
    console.warn(
      "NEXT_PUBLIC_DONATION_WOF_URL not set in environment variables",
    );
  }

  if (!hasEcosystemDonation) {
    console.warn(
      "NEXT_PUBLIC_DONATION_ECOSYSTEM_URL not set in environment variables",
    );
  }
};
