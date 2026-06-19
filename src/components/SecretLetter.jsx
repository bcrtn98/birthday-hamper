function SecretLetter({ unlocked }) {
  if (!unlocked) {
    return <h2>🔒 Secret Letter Locked</h2>;
  }

  return (
    <div>
      <h2>
        No matter how many birthdays come and go,
        you'll always be my Mr. Cartoon ❤️
      </h2>
    </div>
  );
}

export default SecretLetter;