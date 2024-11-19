import { Box, Button, Grid2, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import FormControl from '../utils/FormControl'
import usePets from '../../hooks/usePets';
import useCategories from '../../hooks/useCategories';
import useFiles from '../../hooks/useFiles';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { useTheme } from '../../providers/ThemeProvider';
import 'filepond/dist/filepond.min.css';

registerPlugin(FilePondPluginFileValidateType);

export default function ProductForm({ styles, onSubmit, validateForm, errors, formData, onInputChange, setFormData }) {
  const { theme } = useTheme();
  const { pets, getAllPets, isLoading: petsIsLoading, error: petsError } = usePets();
  const { categories, getAllCategories, isLoading: catIsLoading, error: catError } = useCategories();
  const { setupFileUpload, isLoading: fileIsLoading, error: fileError } = useFiles();
  const formDataRef = useRef(formData);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const setStates = async () => {
      await getAllCategories();
      await getAllPets();
    }
    setStates();
  }, []);

  useEffect(() => {
    formDataRef.current = formData;
    console.log(formData);
    formDataRef.current.name ? setDisabled(false) : setDisabled(true);
    console.log(disabled);
  }, [formData])

  const handleFileUpload = async (fileItems) => {
    if (fileItems.length > 0) {
      const form = new FormData();
      const productName = formDataRef.current.name.trim().split(' ').join('_');
      const file = fileItems[0].file;

      const fileName = `${productName}.${file.type.split('/')[1] || 'png'}`;
      console.warn('File appending: ', file, 'with name: ', fileName);

      // rename file, and append file type extension
      form.append('photo', file, fileName);
      console.log('formData: ', form);
      try {
        const data = await setupFileUpload(form);
        console.log('Upload response:', data);
        if (data) {
          await setFormData((prev) => ({ ...prev, url: `http://localhost:8181/${data}`, alt: `${formDataRef.current.name}` }))
          console.log(formData);
        } else {
          console.error('File upload failed: No filePath returned from server');
        }
      } catch (error) {
        console.error('Error during file upload:', error);
      }
    } else {
      await setFormData((prev) => ({ ...prev, url: '', alt: '' }));

    }
  }

  return (
    <Box component='form' sx={{ ...styles }}>
      <Grid2 container spacing={1} direction='row' width='100'>
        <FormControl
          name='name'
          label='product name'
          error={errors.name}
          onChange={onInputChange}
          formData={formData}
        />
        <FormControl
          name='description'
          label='product description'
          error={errors.description}
          onChange={onInputChange}
          formData={formData}
        />

        <Box display='flex' flexDirection='column' width='100%'>
          <Typography>Image File *</Typography>
          <FilePond disabled={disabled} onupdatefiles={(fileItems) => handleFileUpload(fileItems)} allowFileTypeValidation acceptedFileTypes={['image/*']} />
          <Typography variant='body2' color='error'>* Image file is mandatory.</Typography>
          {
            formData.url ?
              <>
                <Typography>Image Preview</Typography>
                <Box display='flex' justifyContent='center'>
                  <Box component='img' src={formData.url} alt={formData.alt} maxWidth='225px' maxHeight='225px' />
                </Box>
              </> :
              null
          }
        </Box>

        <FormControl
          name='price'
          label='price ($)'
          error={errors.price}
          onChange={onInputChange}
          formData={formData}

        />
        <FormControl
          name='stock'
          label='stock'
          error={errors.stock}
          onChange={onInputChange}
          formData={formData}
        />

        <FormControl
          name='category_id'
          label='category'
          error={errors.category_id}
          onChange={onInputChange}
          formData={formData}
          type='select'
          options={categories}
        />
        <FormControl
          name='petType_id'
          label='pet'
          error={errors.petType_id}
          onChange={onInputChange}
          formData={formData}
          type='select'
          options={pets}
          multiple={true}
        />
        <Grid2 size={12}>
          <Button variant='contained' onClick={onSubmit} disabled={!validateForm()} size='large' color='success' fullWidth sx={{ color: '#fff', fontWeight: theme.typography.fontWeightBold, fontSize: '1.2rem', py: 0.75 }}>Submit</Button>
        </Grid2>
      </Grid2>
    </Box>
  )
}
