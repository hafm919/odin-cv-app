const sectionConfig = {
  education: {
    title: "EDUCATION",
    icon: "fa fa-graduation-cap",
    inputs: [
      {
        key: "edu-school",
        label: "School/University",
        type: "text",
        name: "school",
        placeholder: "Manipal Institute Of Technology",
      },
      {
        key: "edu-degree",
        label: "Degree",
        type: "text",
        name: "degree",
        placeholder: "BTech Computer Science",
      },
      {
        key: "edu-city",
        label: "City",
        type: "text",
        name: "city",
        placeholder: "Manipal",
      },
      {
        key: "edu-country",
        label: "Country",
        type: "text",
        name: "country",
        placeholder: "India",
      },
      {
        key: "edu-start",
        label: "Start Year",
        type: "date",
        name: "start",
        placeholder: null,
      },
      {
        key: "edu-end",
        label: "Graduation Year",
        type: "date",
        name: "end",
        placeholder: null,
      },
    ],
  },
  experience: {
    title: "EXPERIENCE",
    icon: "fa fa-briefcase",
    inputs: [
      {
        key: "exp-company",
        label: "Company",
        type: "text",
        name: "company",
        placeholder: "Intel",
      },
      {
        key: "exp-job",
        label: "Job Title",
        type: "text",
        name: "job",
        placeholder: "Senior SOC Design Lead",
      },
      {
        key: "exp-city",
        label: "City",
        type: "text",
        name: "city",
        placeholder: "Bangalore",
      },
      {
        key: "exp-country",
        label: "Country",
        type: "text",
        name: "country",
        placeholder: "India",
      },
      {
        key: "exp-start",
        label: "Start Year",
        type: "date",
        name: "start",
        placeholder: null,
      },
      {
        key: "exp-end",
        label: "End Year",
        type: "date",
        name: "end",
        placeholder: null,
      },
      {
        key: "exp-description",
        label: "Description",
        type: "textarea",
        name: "description",
        placeholder: "Use -- to create bullet points",
      },
    ],
  },
};

export default sectionConfig;
