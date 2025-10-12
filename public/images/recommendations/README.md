# Recommendations Images

## Avatar Requirements

To complete the recommendations section, add professional headshot images for each recommender:

### Required Files
- `sarah-johnson.jpg` - Sarah Johnson's headshot
- `michael-chen.jpg` - Michael Chen's headshot  
- `emily-rodriguez.jpg` - Emily Rodriguez's headshot

### Image Specifications
- **Format**: JPG or PNG
- **Size**: 200x200px minimum (square aspect ratio)
- **Quality**: High resolution for crisp display
- **Style**: Professional headshots or LinkedIn-style photos

### Fallback Behavior
If an avatar image is missing or fails to load, the component will automatically display the person's initials in a colored circle as a fallback.

### Adding Your Own Recommendations
To add real LinkedIn recommendations:

1. **Update the config**: Edit `src/config.ts` with real recommendation data
2. **Add avatars**: Place recommender photos in this directory
3. **Customize content**: Replace the sample text with actual recommendations
4. **Update dates**: Use real recommendation dates
5. **Verify links**: Ensure LinkedIn profile links are correct

The component is designed to handle any number of recommendations and will display them in a beautiful, professional layout.
