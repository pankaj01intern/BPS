
$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            //vendor validation..........................
            vendor_id:{
                validators: {
                        stringLength: {
                        min: 2,
                    }, notEmpty: {
                        message: 'Please enter vender id'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9\s]+$/i,
                        message: ' characters and numbers only'
                    }
                }
            },
            vendor_name:{
                validators: {
                        stringLength: {
                        min: 2,
                    }, notEmpty: {
                        message: 'Please enter vender name'
                    },
                    regexp: {
                        regexp: /^[a-z\s]+$/i,
                        message: ' characters and numbers only'
                    }
                }
            },
            reg_no: {
                validators: {
                        stringLength: {
                        min: 2,
                    }, notEmpty: {
                        message: 'Please enter company registration number'
                    }, regexp: {
                        regexp: /^(COM){1}[0-9]{3}$/i,
                        message: ' COMXXX formate only'
                    }
                    
                }
            },
            ven_type: {
                validators: {
                        stringLength: {
                        
                    }, notEmpty: {
                        message: 'Please select vender type'
                    }
                    
                }
            },
            website:{
                validators: {
                        stringLength: {
                        
                    }, notEmpty: {
                        message: 'Please enter website'
                    },regexp: {
                        regexp: /^(www.)[a-zA-Z0-9]{1,}(.com)$/i,
                        message: '  formate only'
                    }
                    
                }
            },
            issue_date:{
                validators: {
                        stringLength: {
                        
                    }, notEmpty: {
                        message: 'Please select issue date'
                    }
                    
                }
            },
            emp_count:{
                validators: {
                        stringLength: {
                        
                    }, notEmpty: {
                        message: 'Please enter employee count'
                    }
                    
                }
            },
            cust_count:{
                validators: {
                        stringLength: {
                        
                    }, notEmpty: {
                        message: 'Please enter customer count'
                    }
                    
                }
            },
            yoe:{
                validators: {
                        stringLength: {
                        
                    }, notEmpty: {
                        message: 'Please enter Year of establishment'
                    }
                    
                }
            },
            certificate:{
                validators: {
                        stringLength: {
                        
                    }, notEmpty: {
                        message: 'Please enter certificate'
                    }
                    
                }
            },
            cus_id: {
                validators: {
                        stringLength: {
                        min: 2,
                    }, notEmpty: {
                        message: 'Please enter customer id'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9]+$/i,
                        message: ' characters and numvers only'
                    }
                }
            },
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    }, notEmpty: {
                        message: 'Please enter first name'
                    },
                    regexp: {
                        regexp: /^[a-z\s]+$/i,
                        message: ' characters and spaces only'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 1,
                    }, notEmpty: {
                        message: 'Please enter last name'
                    },
                    regexp: {
                        regexp: /^[a-z\s]+$/i,
                        message: 'characters and spaces only'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 10,
                    },
                    notEmpty: {
                        message: 'Please enter Address'
                    }
                }
            },
            cardNo: {
                validators: {
                     stringLength: {
                        min: 19,
                    },
                    regexp: {
                        regexp: /^[0-9]{4}(-)[0-9]{4}(-)[0-9]{4}(-)[0-9]{4}$/i,
                        message: ' XXXX-XXXX-XXXX-XXXX formate'
                    },
                    notEmpty: {
                        message: 'enter valid card number'
                    }
                }
            },
            balance: {
                validators: {
                     stringLength: {
                        
                    },
                    notEmpty: {
                        message: 'enter balance'
                    }
                }
            },
            reg1_date:{
                validators: {
                     stringLength: {
                       min:1,
                    },
                    notEmpty: {
                        message: 'select date'
                    }
                }
            },
            country: {
                validators: {
                     stringLength: {
                       
                    },
                    notEmpty: {
                        message: 'select country'
                    }
                }
            },
            ven_type: {
                validators: {
                     stringLength: {
                       
                    },
                    notEmpty: {
                        message: 'select vendor type'
                    }
                }
            },
            proofNo: {
                validators: {
                     stringLength: {
                       min:6,
                    },
                    notEmpty: {
                        message: 'enter idproof number'
                    }
                }
            },
            idproof: {
                validators: {
                     stringLength: {
                       
                    },
                    notEmpty: {
                        message: 'select document'
                    }
                }
            },
			states: {
                validators: {
                     stringLength: {
                        
                    },
                    notEmpty: {
                        message: 'select state'
                    }
                }
            },
            contact_num: {
                validators: {
                     stringLength: {
                        min:10,
                        max:10
                    },
                    notEmpty: {
                        message: 'enter contact no '
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your Email Address'
                    },
                    emailAddress: {
                        message: 'Please enter a valid Email Address'
                    }
                }
            },
            contact_no: {
                validators: {
                  stringLength: {
                        min: 10, 
                        max: 10,
                  
                    notEmpty: {
                        message: 'Please enter your Contact No.'
                     }
                }
            },
            
			 department: {
                validators: {
                    notEmpty: {
                        message: 'Please select your Department/Office'
                    }
                }
            },
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});