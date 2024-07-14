import React from "react";
import CustomButton from "./CustomButton";

const Technology = () => {
  return (
    <div className="bg-color-primary-variant mb-5 md:px-12 p-4 md:p-10 gap-2 flex flex-col">
      <h1 className="text-2xl font-bold text-color-light">Technical Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full flex flex-col gap-4 mt-5">
          <div className="w-full flex flex-col gap-3">
            <h1>Frontend Development</h1>
            <div className="flex items-center gap-2 flex-wrap">
              {/* Frontend Development */}
              <CustomButton title="HTML5" otherStyles="!text-xs" />
              <CustomButton title="CSS3" otherStyles="!text-xs" />
              <CustomButton title="JavaScript ES6+" otherStyles="!text-xs" />
              <CustomButton title="ReactJS" otherStyles="!text-xs" />
              <CustomButton title="NestJS" otherStyles="!text-xs" />
              <CustomButton title="AngularJS" otherStyles="!text-xs" />
              <CustomButton title="VueJS" otherStyles="!text-xs" />
              <CustomButton title="Redux" otherStyles="!text-xs" />
              <CustomButton title="TailwindCSS" otherStyles="!text-xs" />
              <CustomButton title="Bootstrap" otherStyles="!text-xs" />
              <CustomButton title="Sass/SCSS" otherStyles="!text-xs" />
              <CustomButton
                title="Responsive Web Design"
                otherStyles="!text-xs"
              />
              <CustomButton
                title="Mobile First Design"
                otherStyles="!text-xs"
              />
              <CustomButton title="PWAs" otherStyles="!text-xs" />
            </div>
          </div>

          <div className="w-full flex flex-col gap-3">
            <h1> DevOps & Deployment</h1>
            <div className="flex items-center gap-2 flex-wrap">
              {/* DevOps & Deployment */}
              <CustomButton
                title="Git Version Control"
                otherStyles="!text-xs"
              />
              <CustomButton title="GitHub" otherStyles="!text-xs" />
              <CustomButton title="GitLab" otherStyles="!text-xs" />
              <CustomButton title="Bitbucket" otherStyles="!text-xs" />
              <CustomButton title="CI/CD" otherStyles="!text-xs" />
              <CustomButton title="Docker" otherStyles="!text-xs" />
              <CustomButton title="Kubernetes" otherStyles="!text-xs" />
              <CustomButton title="AWS" otherStyles="!text-xs" />
              <CustomButton title="Azure" otherStyles="!text-xs" />
              <CustomButton
                title="Google Cloud Platform"
                otherStyles="!text-xs"
              />
              <CustomButton title="Firebase" otherStyles="!text-xs" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <h1> Testing & Debugging</h1>
            <div className="flex items-center gap-2 flex-wrap">
              {/* Testing & Debugging */}
              <CustomButton title="TDD" otherStyles="!text-xs" />
              <CustomButton title="Jest" otherStyles="!text-xs" />
              <CustomButton title="Mocha" otherStyles="!text-xs" />
              <CustomButton title="Chai" otherStyles="!text-xs" />
              <CustomButton title="Cypress" otherStyles="!text-xs" />
              <CustomButton title="Unit Testing" otherStyles="!text-xs" />
              <CustomButton
                title="Integration Testing"
                otherStyles="!text-xs"
              />
              <CustomButton title="End-to-End Testing" otherStyles="!text-xs" />
            </div>
          </div>
     
        </div>
        <div className="w-full flex flex-col gap-4 mt-5">
          <div className="w-full flex flex-col gap-3">
            <h1>Backend Development</h1>
            <div className="flex items-center gap-2 flex-wrap">
              <CustomButton title="NodeJS" otherStyles="!text-xs" />
              <CustomButton title="ExpressJS" otherStyles="!text-xs" />
              <CustomButton title="REST APIs" otherStyles="!text-xs" />
              <CustomButton title="GraphQL" otherStyles="!text-xs" />
              <CustomButton title="NestJs" otherStyles="!text-xs" />
              <CustomButton
                title="Microservices Architecture"
                otherStyles="!text-xs"
              />
              <CustomButton
                title="Serverless Architecture"
                otherStyles="!text-xs"
              />
              <CustomButton title="API Integration" otherStyles="!text-xs" />
              <CustomButton title="OAuth" otherStyles="!text-xs" />
              <CustomButton title="JWT" otherStyles="!text-xs" />
              <CustomButton title="OAuth2" otherStyles="!text-xs" />
              <CustomButton title="Session Management" otherStyles="!text-xs" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <h1>Database Management</h1>
            <div className="flex items-center gap-2 flex-wrap">
              {/* Database Management */}
              <CustomButton title="MongoDB" otherStyles="!text-xs" />
              <CustomButton title="MySQL" otherStyles="!text-xs" />
              <CustomButton title="PostgreSQL" otherStyles="!text-xs" />
              <CustomButton title="Database Design" otherStyles="!text-xs" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <h1>Security</h1>
            <div className="flex items-center gap-2 flex-wrap">
              {/* Security */}
              <CustomButton title="Data Encryption" otherStyles="!text-xs" />
              <CustomButton
                title="Security Best Practices"
                otherStyles="!text-xs"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <h1> Additional Skills</h1>
            <div className="flex items-center gap-2 flex-wrap">
              {/* Additional Skills */}
              <CustomButton
                title="Agile Methodologies"
                otherStyles="!text-xs"
              />
              <CustomButton title="Scrum" otherStyles="!text-xs" />
              <CustomButton title="Jira" otherStyles="!text-xs" />
              <CustomButton title="Webpack" otherStyles="!text-xs" />
              <CustomButton
                title="Performance Optimization"
                otherStyles="!text-xs"
              />
              <CustomButton title="SEO" otherStyles="!text-xs" />
              <CustomButton title="Accessibility" otherStyles="!text-xs" />
              <CustomButton
                title="User Experience Design"
                otherStyles="!text-xs"
              />
              <CustomButton
                title="User Interface Design"
                otherStyles="!text-xs"
              />
              <CustomButton title="Design Systems" otherStyles="!text-xs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
