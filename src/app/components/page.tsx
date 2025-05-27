'use client'

import React, { useState } from 'react';
import { 
  Typography, 
  Button, 
  MagneticButton, 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter,
  Input, 
  Badge, 
  Modal, 
  ModalBody, 
  ModalFooter,
  Tooltip,
  Switch,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  Progress,
  Spinner,
  Alert,
  Accordion,
  AccordionItem,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Avatar,
  Breadcrumb
} from '@/components/ui';

/**
 * Component Showcase Page
 * 
 * Demonstrates all available UI components with various configurations
 * and interactive examples. Perfect for testing and documentation.
 */
export default function ComponentShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [badges, setBadges] = useState(['React', 'TypeScript', 'Tailwind']);
  const [switchValue, setSwitchValue] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState('email');
  const [selectValue, setSelectValue] = useState('');
  const [progress, setProgress] = useState(45);
  const [showAlert, setShowAlert] = useState(true);
  const [activeTab, setActiveTab] = useState('tab1');

  const handleRemoveBadge = (index: number) => {
    setBadges(badges.filter((_, i) => i !== index));
  };

  const selectOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Showcase', isCurrent: true },
  ];

  const SearchIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );

  const InfoIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <Typography variant="h1" color="primary" animated>
            IVLAB UI Components
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            A comprehensive component library built with React, TypeScript, and Framer Motion
          </Typography>
        </div>

        {/* Typography Section */}
        <Card variant="shadow" padding="lg">
          <CardHeader>
            <Typography variant="h2" color="primary">Typography</Typography>
            <Typography variant="body1" color="secondary">
              Flexible typography component with multiple variants, colors, and weights.
            </Typography>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Typography variant="h3">Headings</Typography>
                  <Typography variant="h1">Heading 1</Typography>
                  <Typography variant="h2">Heading 2</Typography>
                  <Typography variant="h3">Heading 3</Typography>
                  <Typography variant="h4">Heading 4</Typography>
                  <Typography variant="h5">Heading 5</Typography>
                  <Typography variant="h6">Heading 6</Typography>
                </div>
                <div className="space-y-3">
                  <Typography variant="h3">Body & Variants</Typography>
                  <Typography variant="subtitle1">Subtitle 1</Typography>
                  <Typography variant="subtitle2">Subtitle 2</Typography>
                  <Typography variant="body1">Body 1 - Regular text</Typography>
                  <Typography variant="body2">Body 2 - Smaller text</Typography>
                  <Typography variant="caption">Caption text</Typography>
                  <Typography variant="overline">Overline text</Typography>
                </div>
              </div>
              
              <div className="space-y-2">
                <Typography variant="h4">Colors & Weights</Typography>
                <div className="flex flex-wrap gap-4">
                  <Typography variant="body1" color="primary" weight="bold">Primary Bold</Typography>
                  <Typography variant="body1" color="secondary" weight="medium">Secondary Medium</Typography>
                  <Typography variant="body1" color="accent" weight="semibold">Accent Semibold</Typography>
                  <Typography variant="body1" color="success">Success</Typography>
                  <Typography variant="body1" color="warning">Warning</Typography>
                  <Typography variant="body1" color="error">Error</Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Buttons Section */}
        <Card variant="shadow" padding="lg">
          <CardHeader>
            <Typography variant="h2" color="primary">Buttons</Typography>
            <Typography variant="body1" color="secondary">
              Versatile button components with multiple variants and interactive states.
            </Typography>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <Typography variant="h4" className="mb-4">Standard Buttons</Typography>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="error">Error</Button>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-4">Button Sizes</Typography>
                <div className="flex items-center gap-3">
                  <Button variant="primary" size="xs">Extra Small</Button>
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                  <Button variant="primary" size="xl">Extra Large</Button>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-4">Button States</Typography>
                <div className="flex gap-3">
                  <Button variant="primary" loading disabled>Loading</Button>
                  <Button variant="secondary" disabled>Disabled</Button>
                  <Button variant="outline" startIcon={<SearchIcon />}>With Icon</Button>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-4">Magnetic Button</Typography>
                <div className="flex gap-4">
                  <MagneticButton variant="dark">Hover Me</MagneticButton>
                  <MagneticButton variant="gradient" size="lg">Gradient Effect</MagneticButton>
                  <MagneticButton variant="outline">Outline Style</MagneticButton>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cards Section */}
        <div className="space-y-6">
          <Typography variant="h2" color="primary">Cards</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Card variant="default" padding="md">
              <CardHeader>
                <Typography variant="h5">Default Card</Typography>
              </CardHeader>
              <CardContent>
                <Typography variant="body1">
                  This is a default card with standard styling and border.
                </Typography>
              </CardContent>
            </Card>

            <Card variant="shadow" interactive padding="md">
              <CardHeader>
                <Typography variant="h5">Interactive Card</Typography>
              </CardHeader>
              <CardContent>
                <Typography variant="body1">
                  This card has hover effects and shadow styling.
                </Typography>
              </CardContent>
              <CardFooter>
                <Button variant="primary" size="sm">Action</Button>
              </CardFooter>
            </Card>

            <Card variant="floating" padding="lg">
              <CardHeader>
                <Typography variant="h5">Floating Card</Typography>
              </CardHeader>
              <CardContent>
                <Typography variant="body1">
                  Enhanced shadow and floating appearance.
                </Typography>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Inputs Section */}
        <Card variant="shadow" padding="lg">
          <CardHeader>
            <Typography variant="h2" color="primary">Inputs</Typography>
            <Typography variant="body1" color="secondary">
              Form inputs with validation, icons, and multiple styling variants.
            </Typography>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-4">
                <Input 
                  label="Default Input"
                  placeholder="Enter text..."
                  helperText="This is helper text"
                />
                
                <Input 
                  label="Filled Input"
                  variant="filled"
                  placeholder="Filled variant"
                />
                
                <Input 
                  label="Outlined Input"
                  variant="outlined"
                  placeholder="Outlined variant"
                />
              </div>

              <div className="space-y-4">
                <Input 
                  label="Search Input"
                  variant="filled"
                  placeholder="Search..."
                  startIcon={<SearchIcon />}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                
                <Input 
                  label="Password"
                  type="password"
                  variant="outlined"
                  placeholder="Enter password"
                />
                
                <Input 
                  label="Error State"
                  variant="outlined"
                  placeholder="Invalid input"
                  error="This field is required"
                />
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Badges Section */}
        <Card variant="shadow" padding="lg">
          <CardHeader>
            <Typography variant="h2" color="primary">Badges</Typography>
            <Typography variant="body1" color="secondary">
              Small status descriptors for counts, labels, and indicators.
            </Typography>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              
              <div>
                <Typography variant="h4" className="mb-4">Variants</Typography>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="info">Info</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-4">Sizes & Shapes</Typography>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="primary" size="sm">Small</Badge>
                  <Badge variant="primary" size="md">Medium</Badge>
                  <Badge variant="primary" size="lg">Large</Badge>
                  <Badge variant="error" rounded>3</Badge>
                  <Badge variant="success" rounded>99+</Badge>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-4">Removable Tags</Typography>
                <div className="flex flex-wrap gap-2">
                  {badges.map((badge, index) => (
                    <Badge 
                      key={index}
                      variant="secondary" 
                      removable 
                      onRemove={() => handleRemoveBadge(index)}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Modal & Tooltip Section */}
        <Card variant="shadow" padding="lg">
          <CardHeader>
            <Typography variant="h2" color="primary">Modal & Tooltip</Typography>
            <Typography variant="body1" color="secondary">
              Interactive overlays for additional content and information.
            </Typography>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              
              <div>
                <Typography variant="h4" className="mb-4">Modal</Typography>
                <Button variant="primary" onClick={() => setModalOpen(true)}>
                  Open Modal
                </Button>
              </div>

              <div>
                <Typography variant="h4" className="mb-4">Tooltips</Typography>
                <div className="flex gap-4 items-center">
                  <Tooltip content="This is a helpful tooltip">
                    <Button variant="outline">Hover for tooltip</Button>
                  </Tooltip>
                  
                  <Tooltip 
                    content="Tooltip on the right side"
                    position="right"
                    delay={300}
                  >
                    <Badge variant="info">Badge with tooltip</Badge>
                  </Tooltip>
                  
                  <Tooltip 
                    content={
                      <div>
                        <Typography variant="subtitle2" color="white">Complex Tooltip</Typography>
                        <Typography variant="body2" color="white">
                          This tooltip contains multiple elements and rich content.
                        </Typography>
                      </div>
                    }
                    position="bottom"
                  >
                    <InfoIcon />
                  </Tooltip>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Modal Component */}
        <Modal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)}
          title="Example Modal"
          size="md"
        >
          <ModalBody>
            <Typography variant="body1">
              This is an example modal with various content. You can include any components 
              here like forms, images, or other interactive elements.
            </Typography>
            <div className="mt-4 space-y-3">
              <Input 
                label="Modal Input"
                placeholder="Enter something..."
              />
              <div className="flex gap-2">
                <Badge variant="success">Modal</Badge>
                <Badge variant="primary">Example</Badge>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setModalOpen(false)}>
              Confirm
            </Button>
          </ModalFooter>        </Modal>

        {/* New Components Showcase */}
        
        {/* Form Controls Section */}
        <Card variant="shadow" padding="lg">
          <CardHeader>
            <Typography variant="h2" color="primary">Form Controls</Typography>
            <Typography variant="body1" color="secondary">
              Advanced form controls including selects, switches, checkboxes and radio buttons.
            </Typography>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-6">
                <div>
                  <Typography variant="h4" className="mb-4">Select Dropdown</Typography>
                  <Select
                    label="Choose Framework"
                    placeholder="Select a framework..."
                    options={[
                      { value: 'react', label: 'React' },
                      { value: 'vue', label: 'Vue.js' },
                      { value: 'angular', label: 'Angular' },
                      { value: 'svelte', label: 'Svelte' },
                    ]}
                    value={selectValue}
                    onChange={(value) => setSelectValue(value as string)}
                    searchable
                    clearable
                    helperText="Choose your preferred framework"
                  />
                </div>

                <div>
                  <Typography variant="h4" className="mb-4">Switch Toggle</Typography>
                  <div className="space-y-3">
                    <Switch
                      checked={switchValue}
                      onChange={setSwitchValue}
                      label="Enable notifications"
                    />
                    <Switch
                      checked={true}
                      disabled
                      label="Disabled switch (on)"
                      variant="success"
                    />
                    <Switch
                      checked={false}
                      disabled
                      label="Disabled switch (off)"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Typography variant="h4" className="mb-4">Checkboxes</Typography>
                  <div className="space-y-3">
                    <Checkbox
                      checked={checkboxValue}
                      onChange={setCheckboxValue}
                      label="I agree to the terms and conditions"
                    />
                    <Checkbox
                      checked={true}
                      disabled
                      label="Disabled checkbox (checked)"
                    />
                    <Checkbox
                      indeterminate={true}
                      label="Indeterminate state"
                    />
                  </div>
                </div>                <div>
                  <Typography variant="h4" className="mb-4">Radio Group</Typography>
                  <RadioGroup
                    value={radioValue}
                    onChange={setRadioValue}
                    name="notifications"
                    options={[
                      { value: 'email', label: 'Email notifications' },
                      { value: 'push', label: 'Push notifications' },
                      { value: 'none', label: 'No notifications' },
                    ]}
                  />
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Progress & Loading Section */}
        <Card variant="shadow" padding="lg">
          <CardHeader>
            <Typography variant="h2" color="primary">Progress & Loading</Typography>
            <Typography variant="body1" color="secondary">
              Progress indicators and loading spinners for various states.
            </Typography>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              
              <div>
                <Typography variant="h4" className="mb-4">Progress Bars</Typography>
                <div className="space-y-4">
                  <Progress value={progress} showLabel />
                  <Progress value={75} variant="success" showLabel striped />
                  <Progress value={45} variant="warning" showLabel animated striped />
                  <Progress value={90} variant="error" size="lg" showLabel />
                  {/* <Progress indeterminate variant="primary" /> */}
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-4">Loading Spinners</Typography>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
                  <div className="text-center">
                    <Spinner type="spin" size="md" />
                    <Typography variant="caption" className="mt-2 block">Spin</Typography>
                  </div>
                  <div className="text-center">
                    <Spinner type="pulse" size="md" variant="success" />
                    <Typography variant="caption" className="mt-2 block">Pulse</Typography>
                  </div>
                  <div className="text-center">
                    <Spinner type="dots" size="md" variant="warning" />
                    <Typography variant="caption" className="mt-2 block">Dots</Typography>
                  </div>
                  <div className="text-center">
                    <Spinner type="bars" size="md" variant="error" />
                    <Typography variant="caption" className="mt-2 block">Bars</Typography>
                  </div>
                  <div className="text-center">
                    <Spinner type="ring" size="md" variant="info" />
                    <Typography variant="caption" className="mt-2 block">Ring</Typography>
                  </div>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Alerts Section */}
        <Card variant="shadow" padding="lg">
          <CardHeader>
            <Typography variant="h2" color="primary">Alerts</Typography>
            <Typography variant="body1" color="secondary">
              Contextual feedback messages for user actions and system status.
            </Typography>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              
              {showAlert && (
                <Alert
                  variant="info"
                  title="Information"
                  description="This is an informational alert with a title and description."
                  dismissible
                  onDismiss={() => setShowAlert(false)}
                />
              )}
              
              <Alert
                variant="success"
                title="Success!"
                description="Your changes have been saved successfully."
                dismissible
              />
              
              <Alert
                variant="warning"
                title="Warning"
                description="Please review your input before proceeding."
              />
              
              <Alert
                variant="error"
                title="Error"
                description="Something went wrong. Please try again."
                filled
              />

            </div>
          </CardContent>
        </Card>

        {/* Navigation Components */}
        <Card variant="shadow" padding="lg">
          <CardHeader>
            <Typography variant="h2" color="primary">Navigation</Typography>
            <Typography variant="body1" color="secondary">
              Navigation components including tabs, accordion, and breadcrumbs.
            </Typography>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              
              <div>
                <Typography variant="h4" className="mb-4">Tabs</Typography>
                <Tabs defaultTab="tab1" onChange={setActiveTab} variant="underline">
                  <TabList>
                    <Tab id="tab1">Overview</Tab>
                    <Tab id="tab2">Features</Tab>
                    <Tab id="tab3">Documentation</Tab>
                    <Tab id="tab4" disabled>Disabled</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel tabId="tab1">
                      <div className="py-4">
                        <Typography variant="h5" className="mb-2">Project Overview</Typography>
                        <Typography variant="body1">
                          This is the overview tab content. Here you can provide general information 
                          about your project, its goals, and key features.
                        </Typography>
                      </div>
                    </TabPanel>
                    <TabPanel tabId="tab2">
                      <div className="py-4">
                        <Typography variant="h5" className="mb-2">Key Features</Typography>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Responsive design</li>
                          <li>TypeScript support</li>
                          <li>Framer Motion animations</li>
                          <li>Dark mode support</li>
                        </ul>
                      </div>
                    </TabPanel>
                    <TabPanel tabId="tab3">
                      <div className="py-4">
                        <Typography variant="h5" className="mb-2">Documentation</Typography>
                        <Typography variant="body1">
                          Comprehensive documentation is available for all components. 
                          Each component includes TypeScript interfaces and usage examples.
                        </Typography>
                      </div>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </div>

              <div>
                <Typography variant="h4" className="mb-4">Accordion</Typography>
                <Accordion allowMultiple defaultOpenItems={["item1"]}>
                  <AccordionItem id="item1" title="What is IVLAB?">
                    <Typography variant="body1">
                      IVLAB is a comprehensive UI component library built with React, TypeScript, 
                      and Framer Motion. It provides a complete set of reusable components for 
                      building modern web applications.
                    </Typography>
                  </AccordionItem>
                  <AccordionItem id="item2" title="How to get started?">
                    <Typography variant="body1">
                      Getting started is easy! Simply install the package, import the components 
                      you need, and start building. All components are fully typed and documented.
                    </Typography>
                  </AccordionItem>
                  <AccordionItem id="item3" title="Customization options">
                    <Typography variant="body1">
                      Every component supports extensive customization through props, CSS classes, 
                      and theme configuration. You can easily adapt the design to match your brand.
                    </Typography>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <Typography variant="h4" className="mb-4">Breadcrumb</Typography>
                <Breadcrumb
                  items={[
                    { label: 'Home', href: '/' },
                    { label: 'Components', href: '/components' },
                    { label: 'UI Library', href: '/components/ui' },
                    { label: 'Showcase', isCurrent: true },
                  ]}
                  showHomeIcon
                />
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Avatar Section */}
        <Card variant="shadow" padding="lg">
          <CardHeader>
            <Typography variant="h2" color="primary">Avatars</Typography>
            <Typography variant="body1" color="secondary">
              User profile pictures and placeholders with various sizes and states.
            </Typography>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              
              <div>
                <Typography variant="h4" className="mb-4">Sizes</Typography>
                <div className="flex items-center gap-4">
                  <Avatar size="xs" name="XS" />
                  <Avatar size="sm" name="SM" />
                  <Avatar size="md" name="MD" />
                  <Avatar size="lg" name="LG" />
                  <Avatar size="xl" name="XL" />
                  <Avatar size="2xl" name="2XL" />
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-4">With Images & Status</Typography>
                <div className="flex items-center gap-4">
                  <Avatar 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    alt="John Doe"
                    size="lg"
                    online
                  />
                  <Avatar 
                    name="Jane Smith"
                    size="lg"
                    online={false}
                    statusColor="red"
                  />
                  <Avatar 
                    name="Alex Johnson"
                    size="lg"
                    clickable
                    onClick={() => alert('Avatar clicked!')}
                  />
                  <Avatar 
                    shape="square"
                    name="SQ"
                    size="lg"
                  />
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
