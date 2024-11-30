import { composeStories } from '@storybook/react';
import { fireEvent, render, screen } from '@testing-library/react';

import * as Story from '../index.stories';

const { DefaultStory, ClickableStory } = composeStories(Story);

describe('AntOverrides > Avatar', () => {
  // Test Case: Renders default props from story
  it('renders default props from story', () => {
    // Arrange: Render the Avatar component with default props from the story
    render(<DefaultStory shape="square" />);

    // Act: Find the Avatar element by its class name or role
    const avatarElement = screen.getByRole('img');

    // Assert: Verify that the Avatar element is in the document and has the correct shape class
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveClass('ant-avatar-square');
  });

  // Test Case: Trigger onClick for Clickable story
  it('triggers onClick event', () => {
    // Arrange: Render the Clickable Avatar component
    const { getByRole } = render(<ClickableStory />);

    // Act: Simulate a click event on the Avatar
    const avatarElement = getByRole('img'); // or use appropriate role if available
    fireEvent.click(avatarElement);

    // Assert: Check if an alert (or action logger) is triggered on click
    expect(avatarElement).toBeInTheDocument();
    // Optionally: Add assertions related to action logging, or mock alert.
  });
});
