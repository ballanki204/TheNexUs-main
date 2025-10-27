import React from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Progress } from "../components/ui/progress";
import { Upload } from "lucide-react";

class ApplicationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      formData: {
        name: "",
        email: "",
        phone: "",
        resume: null,
        coverLetter: "",
        whyJoin: "",
        experience: "",
        linkedin: "",
        github: "",
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleFileChange = (e) => {
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        resume: e.target.files[0],
      },
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({ step: prevState.step + 1 }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({ step: prevState.step - 1 }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", this.state.formData);
    // Show success message or redirect
  };

  renderStep1() {
    const { formData } = this.state;
    return (
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="linkedin">LinkedIn Profile</Label>
          <Input
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="github">GitHub Profile</Label>
          <Input
            id="github"
            name="github"
            value={formData.github}
            onChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  }

  renderStep2() {
    const { formData } = this.state;
    return (
      <div className="space-y-4">
        <div>
          <Label htmlFor="resume">Resume Upload</Label>
          <div className="flex items-center gap-2">
            <Input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={this.handleFileChange}
              className="hidden"
            />
            <Label
              htmlFor="resume"
              className="cursor-pointer flex items-center gap-2 border rounded px-3 py-2"
            >
              <Upload className="w-4 h-4" />
              {formData.resume ? formData.resume.name : "Choose file"}
            </Label>
          </div>
        </div>
        <div>
          <Label htmlFor="coverLetter">Cover Letter</Label>
          <Textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={this.handleInputChange}
            rows={4}
          />
        </div>
        <div>
          <Label htmlFor="whyJoin">Why do you want to join TheNexUs?</Label>
          <Textarea
            id="whyJoin"
            name="whyJoin"
            value={formData.whyJoin}
            onChange={this.handleInputChange}
            rows={3}
            required
          />
        </div>
        <div>
          <Label htmlFor="experience">Years of Experience</Label>
          <Input
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={this.handleInputChange}
            required
          />
        </div>
      </div>
    );
  }

  render() {
    const { step } = this.state;
    const totalSteps = 2;
    const progress = (step / totalSteps) * 100;

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Apply for Position</CardTitle>
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-gray-600">
              Step {step} of {totalSteps}
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={this.handleSubmit}>
              {step === 1 && this.renderStep1()}
              {step === 2 && this.renderStep2()}
              <div className="flex justify-between mt-6">
                {step > 1 && (
                  <Button
                    type="button"
                    onClick={this.handlePrev}
                    variant="outline"
                  >
                    Previous
                  </Button>
                )}
                {step < totalSteps ? (
                  <Button type="button" onClick={this.handleNext}>
                    Next
                  </Button>
                ) : (
                  <Button type="submit">Submit Application</Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ApplicationForm;
