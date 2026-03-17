export const transformNameInitials = (name?:string, firstName?:string, lastName?:string) => {
  if (!name && !firstName && !lastName) {
    return "";
  }

  if (firstName || lastName) {
    return firstName!.charAt(0).toUpperCase() + lastName!.charAt(0).toUpperCase();
  }
  const nameArray = name!.split(" ");
  const initials = nameArray
    .map((name:string) => name.charAt(0).toUpperCase())
    .join("");
  return initials;
};

export const firstLetterUppercase = (text:string) => {
  if (text) {
    const splitText: string[] = text?.split(" ");

    if (splitText.length > 1) {
      const uppercaseArray = splitText.map((text:string) => {
        return text[0].toUpperCase() + text.slice(1, text.length);
      });

      return uppercaseArray.join(" ");
    }

    return text[0].toUpperCase() + text.slice(1, text.length);
  }
};
