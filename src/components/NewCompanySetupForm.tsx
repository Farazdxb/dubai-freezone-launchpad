import { useState } from "react";
import { Upload, Building2, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const freezones = [
  { value: "shams", label: "SHAMS (Sharjah Media City)" },
  { value: "ifza", label: "IFZA (International Free Zone Authority)" },
  { value: "dmcc", label: "DMCC (Dubai Multi Commodities Centre)" },
  { value: "rakez", label: "RAKEZ (Ras Al Khaimah Economic Zone)" },
  { value: "ajman", label: "Ajman Free Zone" },
  { value: "meydan", label: "Meydan Free Zone" },
  { value: "not_sure", label: "Not sure - Help me choose" },
];

const businessActivities = [
  { value: "consulting", label: "Business Consultancy" },
  { value: "trading", label: "General Trading" },
  { value: "ecommerce", label: "E-Commerce" },
  { value: "it_services", label: "IT Services" },
  { value: "marketing", label: "Marketing & Advertising" },
  { value: "media", label: "Media Production" },
  { value: "event_management", label: "Event Management" },
  { value: "real_estate", label: "Real Estate Brokerage" },
  { value: "not_sure", label: "Not sure - Help me choose" },
];

interface NewCompanySetupFormProps {
  trigger?: React.ReactNode;
  defaultOpen?: boolean;
}

export function NewCompanySetupForm({ trigger, defaultOpen = false }: NewCompanySetupFormProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [formData, setFormData] = useState({
    businessName: "",
    freezone: "",
    businessActivity: "",
    residencyStatus: "",
  });
  const [passportFile, setPassportFile] = useState<File | null>(null);
  const [emiratesIdFile, setEmiratesIdFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now just close the dialog - backend will be connected later
    console.log("Form submitted:", { ...formData, passportFile, emiratesIdFile });
    setOpen(false);
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (file: File | null) => void
  ) => {
    const file = e.target.files?.[0] || null;
    setter(file);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-primary hover:bg-primary-hover">
            Submit Preapproval Request
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl font-display">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            New Company Setup
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Business Name */}
          <div className="space-y-2">
            <Label htmlFor="businessName" className="text-foreground font-medium">
              Proposed Business Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="businessName"
              placeholder="Enter your desired business name"
              value={formData.businessName}
              onChange={(e) =>
                setFormData({ ...formData, businessName: e.target.value })
              }
              required
              className="h-11"
            />
            <p className="text-xs text-muted-foreground">
              We'll check availability and reserve this name for you
            </p>
          </div>

          {/* Freezone Selection */}
          <div className="space-y-2">
            <Label htmlFor="freezone" className="text-foreground font-medium">
              Select Freezone
            </Label>
            <Select
              value={formData.freezone}
              onValueChange={(value) =>
                setFormData({ ...formData, freezone: value })
              }
            >
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Choose a freezone or leave blank for recommendation" />
              </SelectTrigger>
              <SelectContent>
                {freezones.map((zone) => (
                  <SelectItem key={zone.value} value={zone.value}>
                    {zone.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Leave blank if you'd like us to recommend the best freezone for your activity
            </p>
          </div>

          {/* Business Activity */}
          <div className="space-y-2">
            <Label htmlFor="activity" className="text-foreground font-medium">
              Business Activity
            </Label>
            <Select
              value={formData.businessActivity}
              onValueChange={(value) =>
                setFormData({ ...formData, businessActivity: value })
              }
            >
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select your primary business activity" />
              </SelectTrigger>
              <SelectContent>
                {businessActivities.map((activity) => (
                  <SelectItem key={activity.value} value={activity.value}>
                    {activity.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Leave blank if you're unsure - we'll help you choose
            </p>
          </div>

          {/* Residency Status */}
          <div className="space-y-2">
            <Label className="text-foreground font-medium">
              Are you a UAE Resident?
            </Label>
            <div className="flex gap-3">
              <Button
                type="button"
                variant={formData.residencyStatus === "resident" ? "default" : "outline"}
                className={`flex-1 h-11 ${
                  formData.residencyStatus === "resident"
                    ? "bg-primary hover:bg-primary-hover"
                    : ""
                }`}
                onClick={() =>
                  setFormData({ ...formData, residencyStatus: "resident" })
                }
              >
                Yes, UAE Resident
              </Button>
              <Button
                type="button"
                variant={formData.residencyStatus === "non_resident" ? "default" : "outline"}
                className={`flex-1 h-11 ${
                  formData.residencyStatus === "non_resident"
                    ? "bg-primary hover:bg-primary-hover"
                    : ""
                }`}
                onClick={() =>
                  setFormData({ ...formData, residencyStatus: "non_resident" })
                }
              >
                No, Non-Resident
              </Button>
            </div>
          </div>

          {/* Document Upload Section */}
          <div className="space-y-4">
            <Label className="text-foreground font-medium">
              Document Upload (Optional)
            </Label>
            <p className="text-xs text-muted-foreground -mt-2">
              Upload now to speed up processing, or submit later via ticket
            </p>

            {/* Passport Upload */}
            <div className="space-y-2">
              <div className="border border-dashed border-border rounded-xl p-4 bg-secondary/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Passport Copy
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formData.residencyStatus === "resident"
                          ? "Optional for residents"
                          : "Required for non-residents"}
                      </p>
                    </div>
                  </div>
                  {passportFile ? (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground truncate max-w-[120px]">
                        {passportFile.name}
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setPassportFile(null)}
                        className="h-8 w-8 p-0"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, setPassportFile)}
                      />
                      <div className="flex items-center gap-2 text-primary text-sm font-medium hover:underline">
                        <Upload className="w-4 h-4" />
                        Upload
                      </div>
                    </label>
                  )}
                </div>
              </div>
            </div>

            {/* Emirates ID Upload */}
            <div className="space-y-2">
              <div className="border border-dashed border-border rounded-xl p-4 bg-secondary/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Emirates ID
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formData.residencyStatus === "resident"
                          ? "Required for UAE residents"
                          : "Not required for non-residents"}
                      </p>
                    </div>
                  </div>
                  {emiratesIdFile ? (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground truncate max-w-[120px]">
                        {emiratesIdFile.name}
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setEmiratesIdFile(null)}
                        className="h-8 w-8 p-0"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, setEmiratesIdFile)}
                      />
                      <div className="flex items-center gap-2 text-primary text-sm font-medium hover:underline">
                        <Upload className="w-4 h-4" />
                        Upload
                      </div>
                    </label>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-primary hover:bg-primary-hover text-base font-semibold"
          >
            Submit Preapproval Request
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By submitting, you agree to our Terms of Service. A ticket will be created
            for your request and our team will assist you further.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
