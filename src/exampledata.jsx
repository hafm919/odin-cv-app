const exampleData = {
  personalInfo: {
    fullName: "Dwight Schrute",
    phoneNumber: "+91 60004256",
    emailID: "dwight@dunder.com",
  },
  education: [
    {
      school: "Scranton Business College",
      degree: "Associate's Degree in Business Administration",
      city: "Scranton",
      country: "USA",
      start: "2005-01-01",
      end: "2007-06-01",
      displayName: "Scranton Business College",
      key: "example-ed-1",
    },
    {
      school: "Cornell University",
      degree: "Bachelor's Degree in Management and Leadership",
      city: "Ithaca",
      country: "USA",
      start: "2000-09-01",
      end: "2004-05-31",
      displayName: "Cornell University",
      key: "example-ed-2",
    },
  ],
  experience: [
    {
      company: "Dunder Mifflin Paper Company",
      job: "Regional Manager",
      city: "Scranton",
      country: "USA",
      start: "2005-01-01",
      end: "2010-12-31",
      description: `
        -- Oversaw daily operations of the Scranton branch, achieving record-breaking sales growth.
        -- Managed a diverse team of employees with unique and often unconventional management techniques.
        -- Built lasting client relationships that enhanced regional market presence.`,
      displayName: "Dunder Mifflin Paper Company",
      key: "example-ex-1",
    },
    {
      company: "Schrute Farms",
      job: "Owner and Beet Farmer",
      city: "Honesdale",
      country: "USA",
      start: "2005-01-01",
      end: "2024-12-01",
      description: `
        -- Operated a successful agritourism business offering beet farming and bed-and-breakfast services.
        -- Designed creative marketing strategies that drove customer engagement and revenue growth.
        -- Ensured sustainable farming practices while maintaining high product quality.`,
      displayName: "Schrute Farms",
      key: "example-ex-2",
    },
    {
      company: "Prince Family Paper",
      job: "Sales Associate",
      city: "Carbondale",
      country: "USA",
      start: "2004-01-01",
      end: "2005-12-31",
      description: `
        -- Managed client accounts for a small, family-owned paper supplier with a focus on personalized service.
        -- Cultivated strong relationships with clients to ensure loyalty and repeat business.
        -- Contributed to the company's local reputation for outstanding customer care.`,
      displayName: "Prince Family Paper",
      key: "example-ex-3",
    },
  ],
};
export default exampleData;
